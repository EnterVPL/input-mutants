/**
 * Implement mutant texts
 * 
 * # Imitation of ``<input type="text" />``
 * ## Example:
 * ``<mutant type="text" placeholder="Default placeholder" a_numbers="true">Default value</mutant>``
 *
 * ## Differences between regular input and a mutant:
 * ### Additional attributes:
 * - ``a_numbers`` - allow numbers = ``true`` or ``false``
 *
 * @link   https://github.com/EnterVPL/input-mutants
 * @file   This files defines the mText prototype function and create instanse from that
 * @author Łukasz Bieniek.
 * @since  1.0.0
 */

/**
 * @function mText
 */
const mText = function() {
    /**
     * Container of all mutants type of text 
     * @param elements
     */
    this.elements = document.querySelectorAll('mutant[type="text"]');
    this.setEditable(this.elements);
}

/**
 * 
 * @param {NodeList} elements 
 */
mText.prototype.setEditable = async function(elements) {
    for(let el of elements) {
        mTool.asyncProccess(function(){el.contentEditable = true});
    }
}

/**
 * Instanse of mText
 * @global mTextInstance
 */
mTextInstance = new mText();