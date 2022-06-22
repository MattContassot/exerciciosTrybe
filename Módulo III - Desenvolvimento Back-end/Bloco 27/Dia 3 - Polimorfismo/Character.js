var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Character = /** @class */ (function () {
    function Character(name) {
        this.name = name;
    }
    return Character;
}());
var MeleeCharacter = /** @class */ (function (_super) {
    __extends(MeleeCharacter, _super);
    function MeleeCharacter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MeleeCharacter.prototype.talk = function () { console.log('Melee falando'); };
    MeleeCharacter.prototype.specialMove = function () { console.log('Melee movimento especial'); };
    return MeleeCharacter;
}(Character));
var LongRangeCharacter = /** @class */ (function (_super) {
    __extends(LongRangeCharacter, _super);
    function LongRangeCharacter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LongRangeCharacter.prototype.talk = function () { console.log('Long Range falando'); };
    LongRangeCharacter.prototype.specialMove = function () { console.log('Long Range movimento especial'); };
    return LongRangeCharacter;
}(Character));
var a = new MeleeCharacter('Fulano');
var b = new LongRangeCharacter('Ciclano');
var myMethods = function (character) {
    character.talk();
    character.specialMove();
};
myMethods(a);
myMethods(b);
