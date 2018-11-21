import $ from 'jquery';
import { parseCode } from './code-analyzer';
import { parseBody } from './Parser';
import { getAns } from './Parser';



$(document).ready(function () {
    $('#codeSubmissionButton').click(() => {
        let codeToParse = $('#codePlaceholder').val();
        let parsedCode = parseCode(codeToParse);
        let parsedCodeBody = parsedCode.body;
        parseBody(parsedCodeBody);
        Printer(getAns());
        // console.log(ans);

        $('#parsedCode').val(JSON.stringify(parsedCode, null, 2));
    });
});



function Printer(json) {
    var tr;
    tr = $('<tr/>');
    tr.append('<td class="out title Line">' + 'Line' + '</td>');
    tr.append('<td class="out title Type">' + 'Type' + '</td>');
    tr.append('<td class="out title Name">' + 'Name' + '</td>');
    tr.append('<td class="out title Condition">' + 'Condition' + '</td>');
    tr.append('<td class="out title Condition">' + 'Value' + '</td>');
    $('#outputTable').append(tr);
    for (var i = 0; i < json.length; i++) {
        tr = $('<tr/>');
        tr.append('<td class="out Line">' + json[i].line + '</td>');
        tr.append('<td class="out Type">' + json[i].type + '</td>');
        tr.append('<td class="out Name">' + json[i].name + '</td>');
        tr.append('<td class="out Condition">' + json[i].condition + '</td>');
        tr.append('<td class="out Value">' + json[i].value + '</td>');
        $('#outputTable').append(tr);
    }
}




