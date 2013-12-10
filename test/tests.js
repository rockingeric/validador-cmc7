test('Cmc7Validator.validate()', function() {
    ok(Cmc7Validator.validate("54507460 5975664125 206053548837"), "That's it we're getting there, 54507460 5975664125 206053548837 is accepted");
    ok(Cmc7Validator.validate("25553748 6348746315 441959736517"), "OK, 25553748 6348746315 441959736517 passed");
    ok(!Cmc7Validator.validate("25553148 6348746315 441959736517"), "No, 25553748 6348746315 441959736517 isn't valid");
    ok(!Cmc7Validator.validate(null), "null can't be a CMC7");
    ok(!Cmc7Validator.validate(undefined), "undefined is not a valid value");
    ok(!Cmc7Validator.validate(""), "You can't pass a empty string");
})

test('Cmc7Validator.module10()', function() {
    ok(Cmc7Validator.module10("25553748"), "OK, 25553748 passed");
    ok(!Cmc7Validator.module10(null), "null can't be a used to calculate de module10");
    ok(!Cmc7Validator.module10(undefined), "undefined is not a valid value");
    ok(!Cmc7Validator.module10(""), "You can't pass a empty string");
})

test('Cmc7Validator.mod()', function() {
    ok(Cmc7Validator.mod(40, 2) == 0, "Yes, it passed");
    ok(Cmc7Validator.mod(10, 90) == 10, "Yes, you got it");

    // fails
    ok(isNaN(Cmc7Validator.mod("25553748", "ads")), "Nope, strings aren't valid");
    ok(isNaN(Cmc7Validator.mod(null, null)), "null can't be a used to calculate de mod");
    ok(Cmc7Validator.mod(null, 2) == 0, "null can't be a used as the first parameter");
    ok(isNaN(Cmc7Validator.mod(2, null)), "null can't be a used as the second parameter");
    ok(isNaN(Cmc7Validator.mod(undefined, undefined)), "undefined is not a valid value");
    ok(isNaN(Cmc7Validator.mod(undefined, 2)), "undefined is not a valid value for the first parameter");
    ok(isNaN(Cmc7Validator.mod(2, undefined)), "undefined is not a valid value for the second parameter");
    ok(isNaN(Cmc7Validator.mod("", "")), "You can't pass a empty string");
    ok(Cmc7Validator.mod("", 2) == 0, "You can't pass a empty string as the first parameter");
    ok(isNaN(Cmc7Validator.mod(2, "")), "You can't pass a empty string as the second parameter");
})