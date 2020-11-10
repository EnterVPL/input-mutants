/**
 * # Imitation of ``<input type="text" />``
 * ## Example:
 * ``<mutant type="text" placeholder="Default placeholder" a_numbers="true">Default value</mutant>``
 *
 * ## Differences between regular input and a mutant:
 * ### Additional attributes:
 * - ``a_numbers`` - allow numbers = ``true`` or ``false``
 */
const mText = function(){
    this.elements = document.querySelectorAll('mutant[type="text"]');
    this.setEditable(this.elements);
}

mText.prototype.setEditable = async function(elements) {
    for(let el of elements) {
        mTool.asyncProccess(function(){el.contentEditable = true});
    }
}

mTextInstance = new mText();