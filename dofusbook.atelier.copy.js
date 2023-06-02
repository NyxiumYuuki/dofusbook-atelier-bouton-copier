function addCopyButtonAtelier() {

    const buttonPropertiesConstants = {
        "textButtonCopy": "copy",
        "backgroundColorButtonCopy": "",
        "textButtonCopied": "copied",
        "backgroundColorButtonCopied": "#6dc700"
    };
    
    const itemCells = document.getElementsByClassName('cell');

    if(itemCells.length > 0){
        for(const itemCell of itemCells) {
            const itemWrapper = itemCell.getElementsByClassName('wrapper').item(0);
            const itemName = itemWrapper.getElementsByClassName('label').item(0).innerHTML;

            if(itemWrapper.getElementsByClassName('copy-btn').length == 0){
                let itemCopyButton = document.createElement("button");
                itemCopyButton.innerHTML = buttonPropertiesConstants.textButtonCopy;
                itemCopyButton.setAttribute('class', 'copy-btn');
                
                itemCopyButton.onclick = function(){
                    navigator.clipboard.writeText(itemName).then(() => {
                        console.info(`${itemName} copied !`);
                        itemCopyButton.innerHTML = buttonPropertiesConstants.textButtonCopied;
                        itemCopyButton.style.backgroundColor = buttonPropertiesConstants.backgroundColorButtonCopied;
                        setTimeout(function(){ 
                            itemCopyButton.innerHTML = buttonPropertiesConstants.textButtonCopy;
                            itemCopyButton.style.backgroundColor = buttonPropertiesConstants.backgroundColorButtonCopy;
                        }, 3000);
                    }, () => {
                        console.error(`ERROR ${itemName} not copied !`);
                    });
                };

                itemWrapper.appendChild(itemCopyButton);
            } else { console.error("copy-btn already exist"); }
        }
    } else {
        setTimeout(addCopyButtonAtelier, 250); // try again in 300 milliseconds
    }
}

addCopyButtonAtelier();
