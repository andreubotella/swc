// none of these should work, since non are actually modules
var V = 12;
class C {
}
var E;
(function(E) {
    E[E["Red"] = 0] = "Red";
    E[E["Blue"] = 1] = "Blue";
})(E || (E = {
}));
export { };
