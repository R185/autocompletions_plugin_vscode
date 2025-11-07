import * as vscode from 'vscode';

const snippets = new Map<string, string>([
    ['w', 'while'],
    ['f', 'for'],
    ['i', 'if'],
    ['s', 'std']
]);

// Активация расширения
export function activate(context: vscode.ExtensionContext) {
    console.log('Auto completion is now active!');
	vscode.window.showInformationMessage('Auto completion is now active!');
    // Регистрация провайдера дополнений
    context.subscriptions.push(registerSnippetCompletionItem());
}

// Деактивация расширения
export function deactivate() {}

// Функция для возврата генератора подсказока
export function registerSnippetCompletionItem(): vscode.Disposable {
    return vscode.languages.registerCompletionItemProvider(
        { language: 'cpp', scheme: 'file' }, 
        {
            provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
                const linePrefix = document.lineAt(position).text.substr(0, position.character);
                
                let completions: vscode.CompletionItem[] = [];
                

                snippets.forEach((value, key) => {
                    if (linePrefix.endsWith(key)) {
                        const completion = new vscode.CompletionItem(value, vscode.CompletionItemKind.Snippet);
                        
                        //Приоритет подсказок
                        completion.sortText = "!";

                        switch (value) {
                            case 'while':
                                completion.insertText = new vscode.SnippetString('while (');
                                break;
                            case 'for':
                                completion.insertText = new vscode.SnippetString('for (int i = 0; i < ');
                                break;
                            case 'if':
                                completion.insertText = new vscode.SnippetString('if (');
                                break;
                            case 'std':
                                completion.insertText = new vscode.SnippetString('std::cout << ');

                        }
                        completions.push(completion);
                    }
                });
                
                return completions.length ? completions : undefined;
            }
        },
        "",
    );
}
