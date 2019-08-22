Blockly.Blocks['linear_hall_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LINEAR HALL");
    this.appendValueInput("LINEAR_HALL_ANALOG_PIN")
        .setCheck("Number")
        .appendField("ANALOG PIN");
    this.appendValueInput("LINEAR_HALL_DIGITAL_PIN")
        .setCheck("Number")
        .appendField("DIGITAL PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};