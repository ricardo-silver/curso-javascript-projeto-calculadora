class CalcController {

    constructor() {

        this._locale = "pt-BR";
        this._displayCalcEl = document.querySelector("#display");

        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");

        this._currentDate;
        this.initialize();
    }

    initialize() {

        setInterval(()=>{
            
            this.displayDate = this.currentDate.toLocaleDateString(this._locale);
            this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
        
        },1000);
        
       ;
    }

    initButtonsEvent() {

        let buttons = document.querySelectorAll("#buttons > g , #parts > g");


        buttons.forEach((btn,index) => {


            btn.addEventListener("click", e => {

                let txtBtn = btn.className.baseval.replace("btn-","");

                this.execBtn(txtBtn);

            })

        })

       
    }

    get displayTime() {
        return this._timeEl.innerHTML;
    }

    set displayTime(value) {
        return this._timeEl.innerHTML = value;
    }

    get displayDate() {
        return this._dateEl.innerHTML;
    }

    set displayDate(value) {
        return this._dateEl.innerHTML = value;
    }

    
    get displayCalc() {

        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value) {

        return this._displayCalcEl.innerHTML = value;
    }

    get currentDate() {

        return new Date();
    }

    set currentDate(value) {

        return this._currentDate = value;
    }


}