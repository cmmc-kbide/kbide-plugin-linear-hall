Blockly.Blocks['linear_hall_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LINEAR HALL");
    this.appendValueInput("LINEAR_HALL_PIN")
        .setCheck("Number")
        .appendField("PIN");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["digital","0"], ["analog","1"]]), "ST_PIN");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};