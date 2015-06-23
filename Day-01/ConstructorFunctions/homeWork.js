/*Create a "class" by name "SalaryCalculator".
The SalaryCalculator should have the following members
    basic
    hra
    da
    tax
    salary
    calculate()

The user should be able to initialize the SalaryCalculator with basic, hra, da, and tax.
The salary should be calculated when the user invokes the "calculate()" method and assigned to 'salary'*/

function SalaryCalculator(basic, hra, da, tax){
    this.basic = basic;
    this.hra = hra;
    this.da = da;
    this.tax = tax;
    this.salary = 0;

    this.calculate = function(){
        var gross = this.basic + this.hra + this.da;
        this.salary = gross * ((100-this.tax)/100);
    }
}


/*Make salary readonly*/

function SalaryCalculator(basic, hra, da, tax){
    this.basic = basic;
    this.hra = hra;
    this.da = da;
    this.tax = tax;
    this.__salary = 0;
}
SalaryCalculator.prototype.getSalary = function(){
        return this.__salary;
    };
SalaryCalculator.prototype.calculate = function(){
    var gross = this.basic + this.hra + this.da;
    this.__salary = gross * ((100-this.tax)/100);
}








