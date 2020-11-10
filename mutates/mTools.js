/**
 * Implements mutants tools
 * 
 * Global tools for all mutants
 *
 * @link   https://github.com/EnterVPL/input-mutants
 * @file   This files defines the mTool object.
 * @author Łukasz Bieniek.
 * @since  1.0.0
 */

/**
 * A container for tools that are to facilitate the work on mutants.
 * @global mTool
 */
const mTool = {
    /**
     * Do handler in async function
     * @param {Function} handler 
     */
    asyncProccess: async function(handler) {
        handler();
    }
}

