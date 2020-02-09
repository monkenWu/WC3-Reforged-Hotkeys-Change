var inputs = {
    inv : $("#InvForm"),
    com : $("#ComForm"),
    render : function(){
        this.inv.html(this.getInvInput());
        this.com.html(this.getComInput());
    },
    getInvInput : function(){
        var html = '<div class="form-row">';
        for (let index = 0; index < 6; index++) {
            html += `
                <div class="form-group col-md-6">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox"
                        id="InvHeroOnly${index}" onclick="inputs.setHeroOnly(this,'InvHeroOnly${index}')">
                        <label class="form-check-label" for="InvHeroOnly${index}">英雄專屬
                        </label>
                    </div>
                    <input type="text" class="form-control" onkeyup="inputs.setKeyCode(event,this,'InvHotkey${index}')">
                </div>
            `;
        }
        html += '<\div>';
        return html;
    },
    getComInput : function(){
        var html = '<div class="form-row">';
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                html += `
                    <div class="form-group col-md-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox"
                            id="ComHeroOnly${i}${j}" onclick="inputs.setHeroOnly(this,'ComHeroOnly${i}${j}')">
                            <label class="form-check-label" for="ComHeroOnly${i}${j}">英雄專屬
                            </label>
                        </div>
                        <input type="text" class="form-control" onkeyup="inputs.setKeyCode(event,this,'ComHotkey${i}${j}')">
                    </div>
                `;
            }
        }
        html += '<\div>';
        return html;
    },
    setKeyCode : function(event,dom,name){
        w3Set[name] = event.keyCode;
        $(dom).val(event.code);
    },
    setHeroOnly : function(dom,name){
        w3Set[name] = $(dom)[0].checked ? 1 : 0;
    }
}

$(document).ready(function () {
    inputs.render();
});

//禁止tab功能生效
document.onkeydown = function HandleTabKey(evt) {
    if (evt.keyCode == 9) {
        if (evt.preventDefault) {
            evt.preventDefault();
        }
        else {
            evt.returnValue = false;
        }
    }
}

    
