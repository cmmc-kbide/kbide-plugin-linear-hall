Blockly.JavaScript['linear_hall_block'] = function(block) {
  var value_linear_hall_pin = Blockly.JavaScript.valueToCode(block, 'LINEAR_HALL_PIN', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_st_pin = block.getFieldValue('ST_PIN');
  // TODO: Assemble JavaScript into code variable.
  if(dropdown_st_pin == "0"){
  	  var code =
  `#SETUP pinMode(${value_linear_hall_pin}, INPUT);#ENDdigitalRead(${value_linear_hall_pin})`
  }
  if(dropdown_st_pin == "1"){
  	var code =`analogRead(${value_linear_hall_pin})`
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};