import React from 'react';
import JsonPlaceHolderService from './JsonPlaceHolderService';
import RestApiExampleService from './RestApiExampleService';
import FileSaver from 'file-saver';

const receiver = 'byj1986@163.com';
const subject = (x) => `Final Release Steps for ${x}`;

const defaultTemplate = `<textarea id="textbox" style="width: 300px; height: 600px;">
To: User <user@domain.demo>
Subject: Subject
X-Unsent: 1
Content-Type: text/html

<html>
<head>
<style>
    body, html, table {
        font-family: Calibri, Arial, sans-serif;
    }
    .pastdue { color: crimson; }
    table {
    	border: 1px solid silver;
    	padding: 6px;
    }
    thead {
        text-align: center;
        font-size: 1.2em;
        color: navy;
        background-color: silver;
        font-weight: bold;
    }
    tbody td {
    	text-align: center;
    }
</style>
</head>
<body>
<table width=100%>
	<tr>
		<td><img src="http://www.laurell.com/images/logo/laurell_logo_storefront.jpg" width="200" height="57" alt=""></td>
		<td align="right"><h1><span class="pastdue">PAST DUE</span> INVOICE</h1></td>
	</tr>
</table>
<table width=100%>
	<thead>
		<th>Invoice #</th>
		<th>Days Overdue</th>
		<th>Amount Owed</th>
	</thead>
	<tbody>
	<tr>
		<td>OU812</td>
		<td>9</td>
		<td>$4395.00</td>
	</tr>
	<tr>
		<td>OU812</td>
		<td>9</td>
		<td>$4395.00</td>
	</tr>
	<tr>
		<td>OU812</td>
		<td>9</td>
		<td>$4395.00</td>
	</tr>
	</tbody>
</table>
</body>
</html>
</textarea>`;

export class SampleApp extends React.Component {

    componentDidMount() {
        // Linking.openURL('mailto:byj1986@163.com&subject=aaa&body=bbb');
        // JsonPlaceHolderService.getTodo().then(x => {
        //     console.log(os.userInfo().username);
        //     console.log(x);
        // }, error => {
        //     console.log(error);
        // });

        // RestApiExampleService.getEmployee().then(x => {
        //     console.log(x);
        // }, error => {
        //     console.log(error);
        // });
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    saveEmail(e) {
        console.log('Save email file');
        var data = new Blob([defaultTemplate], { type: 'text/plain' });
        const emailContext = window.URL.createObjectURL(data);
        FileSaver.saveAs(emailContext, 'message.eml');
    }

    render() {
        return (
            <div>
                <button id="create" onClick={this.saveEmail.bind(this)}>Create file</button>
            </div>
        );
    }
}

export default SampleApp;