function waitResources() {
    const itemCells = document.getElementsByClassName('cell');
  
    if(itemCells.length > 0){
        for(const itemCell of itemCells) {
            const itemWrapper = itemCell.getElementsByClassName('wrapper').item(0);
            const itemName = itemWrapper.getElementsByClassName('label').item(0).innerHTML.slice(1, -1);

            let itemCopyButton = document.createElement("button");
            itemCopyButton.innerHTML = "copy";
            itemCopyButton.onclick = function(){
                navigator.clipboard.writeText(itemName).then(() => {
                    console.info(`${itemName} copied !`);
                }, () => {
                    console.error(`ERROR ${itemName} not copied !`);
                });
            };

            itemWrapper.appendChild(itemCopyButton);
        }
    } else {
        setTimeout(waitResources, 250); // try again in 300 milliseconds
    }
}

waitResources(); 