// + operator on boolean type
var BOOLEAN;
function foo() {
    return true;
}
class A {
    static foo() {
        return false;
    }
}
var M;
(function(M1) {
    var n;
    M1.n = n;
})(M || (M = {
}));
var objA = new A();
// boolean type var
var ResultIsNumber1 = +BOOLEAN;
// boolean type literal
var ResultIsNumber2 = +true;
var ResultIsNumber3 = +{
    x: true,
    y: false
};
// boolean type expressions
var ResultIsNumber4 = +objA.a;
var ResultIsNumber5 = +M.n;
var ResultIsNumber6 = +foo();
var ResultIsNumber7 = +A.foo();
// miss assignment operators
+true;
+BOOLEAN;
+foo();
+true, false;
+objA.a;
+M.n;
