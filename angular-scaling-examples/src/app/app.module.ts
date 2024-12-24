// Initial monolithic setup
@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
    ],
    declarations: [AllComponentsAtOnce],
    bootstrap: [AppComponent]
})
export class AppModule { }