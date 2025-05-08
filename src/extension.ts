import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {


	console.log('Congratulations, your extension "dynamics-sdk-helper" is now active!');


	const disposable = vscode.commands.registerCommand('dynamics-sdk-helper.helloWorld', () => {

		vscode.window.showInformationMessage('Hello World from dynamics-sdk-helper!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
