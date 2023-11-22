export enum EditorTheme {
  ESPRESSO = "espresso",
  COBALT = "cobalt",
}

export interface Settings {
  openAiApiKey: string | null;
  screenshotOneApiKey: string | null;
  isImageGenerationEnabled: boolean;
  editorTheme: EditorTheme;
  termOfServiceAccepted: boolean;
}

export enum AppState {
  INITIAL = "INITIAL",
  CODING = "CODING",
  CODE_READY = "CODE_READY",
}
