
    var linksHovered= document.getElementById("linksHovered");
    var whatsNew = document.getElementById("whatsNew")
    whatsNew.addEventListener("mouseleave",function(){
       
        linksHovered.innerHTML= null;
    })
    whatsNew.addEventListener("mouseenter",function(){
       
    
        linksHovered.innerHTML= `
                <div id="innerHovered">
                    <div>
                       <h3>What's new</h3>
                       <p>New Today</p>
                       <h3>What's new</h3>
                       <p>New Today</p>
                    </div>

                    <div>
                       <h3>What's new</h3>
                       <p>New Today</p>
                       <h3>What's new</h3>
                       <p>New Today</p>
                    </div>

                    <div>
                       <h3>What's new</h3>
                       <p>New Today</p>
                       <h3>What's new</h3>
                       <p>New Today</p>
                    </div>
                </div>
            `
    })

    var mensHovered= document.getElementById("mensHovered");
