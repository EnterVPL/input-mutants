/**
 * Implements mutants working
 * 
 * Creating ``script`` tags and push those to head or to body.
 *
 * @link   https://github.com/EnterVPL/input-mutants
 * @author Łukasz Bieniek.
 * @since  1.0.0
 */
(async function() {
    // If you need to reconfigure loading, just change the flags.

    /*********
     * FLAGS *
     *********/ 

    /**
     * Controls version cache
     * If the changes do not apply then change the version one up and set the GET ``?number`` parameter with the same number when loading autoload.js.
     * E.g. ``<script src="mutates/autoload?2"></script>``
     * 
     * @member version
     */
    const version = '1';

    /** 
     * Base separator
     * @member s
     */
    const s = '/';

    /**
     * Base path
     * @member base_path
     */
    const base_path = 'mutates';

    /**
     * Path to tools
     * @member toolsPath
     */
    const toolsPath = createPath("mTools.js", base_path, s);

    /**
     * List of all mutants
     * If you want to load fewer mutants then remove from the list those mutants that you don't handle.
     * @member mutates_list
     */
    const mutates_list = [ "text" ];

    /**
     * Base file in mutation
     * @member main_mutate_file
     */
    const main_mutate_file = "main.js";


    /*************
     * FUNCTIONS *
     *************/

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
     * Load script(s) to ``<head> . . . </head>``
     * 
     * @param {String} path 
     */
    function loadHeadScripts(path) {
        document.head.appendChild(createScriptTag(path));
    }

    /**
     * Load script(s) to ``<body> . . . </body>``
     * 
     * @param {String} path
     */
    function loadBodyScripts(path) {
        document.body.appendChild(createScriptTag(path));
    }

    /****************
     * INIT SCRIPTS *
     ****************/

    loadHeadScripts(toolsPath);

    for(let mutate of mutates_list) {
        let file = mutate + s + main_mutate_file;
        let path = createPath(file, base_path, s);
        loadBodyScripts(path);
    }
})();