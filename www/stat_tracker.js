function get_stat_json()
{
    $.ajax({
      dataType: 'jsonp',
      //url: 'http://extras.denverpost.com/app/stat-tracker/output/.jsonp',
      //url: 'output/.jsonp',
      success: function () {}
    });
}
var refresh_every = 60 * 1000;
var stat_interval = window.setInterval(function() { get_stat_json() }, refresh_every);


var tracker = {
    sheet: '',
    sheets_loaded: 0,
    items: {},
    slugify: function (text)
    {
        // from https://gist.github.com/mathewbyrne/1280286
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, '');            // Trim - from end of text
    },
    init: function()
    {
        // Loop through the items, putting each item in this.items indexed by name_full.
        // If we have two items for that last name, we write it to the page.
        $('#charges').html('');
        $.each(this[this['sheet']], function(index, value)
        {
            var key = value['name_full'];
            var write_it = 1;
            var verdict = window.verdict;
            if ( !(key in window.verdict['items']) )
            {
                window.verdict['items'][key] = [];
                write_it = 0;
            }
            window.verdict['items'][key].push(value);

            if ( write_it == 1 )
            {
                // Some items we clean up
                window.verdict['items'][key][0]['Charge'] = verdict.charge_lookup(window.verdict['items'][key][0]['Charge']);
                window.verdict['items'][key][1]['Charge'] = verdict.charge_lookup(window.verdict['items'][key][1]['Charge']);
                window.verdict['items'][key][0]['Verdict'] = verdict.verdict_lookup(window.verdict['items'][key][0]['Verdict']);
                window.verdict['items'][key][1]['Verdict'] = verdict.verdict_lookup(window.verdict['items'][key][1]['Verdict']);

                // Some values we compute.
                window.verdict['items'][key][0]['slug'] = verdict.slugify(window.verdict['items'][key][0]['name_full']);
                window.verdict['items'][key][0]['verdict_slug'] = verdict.slugify(window.verdict['items'][key][0]['Verdict']);
                window.verdict['items'][key][1]['verdict_slug'] = verdict.slugify(window.verdict['items'][key][1]['Verdict']);

                var colon = [':', ':'];
                if ( window.verdict['items'][key][0]['Charge'] == 'Crime of violence (sentence enhancer)' ) colon[0] = '';
                if ( window.verdict['items'][key][1]['Charge'] == 'Crime of violence (sentence enhancer)' ) colon[1] = '';
                var charges_markup = verdict.charge_markup(window.verdict['items'][key][0], colon[0]) + verdict.charge_markup(window.verdict['items'][key][1], colon[1]);
                var markup = verdict.item_markup(window.verdict['items'][key][0], charges_markup);
                $('#charges').append(markup);
            }
        });
        this.items = {};
        this.sheets_loaded = 0;
    }
};

function tracker_callback(items)
{
    window.tracker['items'] = items;
    window.tracker.init();
}
