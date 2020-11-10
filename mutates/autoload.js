(async function() {

    // Controls version cache
    const version = '1';

    // Base separator
    const s = '/';

    // Base path
    const base_path = 'mutates';

    // Path to tools
    const toolsPath = createPath("mTools.js", base_path, s);

    // List of all mutations
    const mutates_list = [ "text" ];

    // Base file in mutation
    const main_mutate_file = "main.js";

    /**
     * Create path
     * 
     * @param {String} file 
     * @param {String} base 
     * @param {String} separator
     * 
     * @returns {String}
     */
    function createPath(file, base, separator) {
        return base + separator + file + '?' + version;
    }

    /**
     * Create script element
     * 
     * @param {String} path 
     * 
     * @returns {Object}
     */
    function createScriptTag(path) {
        const script = document.createElement('script');
        script.src = path;
        return script;
    }

    /**
     * Create path and tag
     * 
     * @param {String} file 
     * @param {String} base 
     * @param {String} separator
     * 
     * @returns {Object}
     */
    function createTagWithPath(file, base, separator) {
        return createScriptTag(createPath(file, base, separator));
    }

    /**
     * Load  
     * 
     * @param {String} path 
     */
    function loadHeadScripts(path) {
        document.head.appendChild(createScriptTag(path));
    }

    function loadBodyScripts() {
        for(let mutate of mutates_list) {
            let path = base_path + s + mutate;
            document.body.appendChild(createTagWithPath(main_mutate_file, path, s));
        }
    }

    loadHeadScripts(toolsPath);
    loadBodyScripts();

})();