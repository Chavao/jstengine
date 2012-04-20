var JSTemplate = function()
{
    this.render = function(json, template) {
        var html = '';

        if(json.length != undefined) {
            for(var i = 0; i < json.length; i++) {
                html += this.parse(json[i], template);
            }
        } else {
            html += this.parse(json, template);
        }
    
        return html;
    };

    this.parse = function(json, template) {
        var pattern = /\@\{(\w*)\}/g;
    
        return (template).replace(pattern, function(key) {
            return json[key.slice( 2, -1 )];
        });
    };
};
