import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {
  // Dichiarazione del gruppo del modulo
  contattiForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Definizione dei campi del form e delle regole di validazione
    this.contattiForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // Funzione che gestisce l'invio dei dati inseriti aprendo il client mail dell'utente
  onInvia(): void {
    if (this.contattiForm.valid) {
      const nome = this.contattiForm.value.name;
      const emailUtente = this.contattiForm.value.email;
      const messaggio = this.contattiForm.value.message;

      // La tua email professionale dove riceverai i messaggi
      const emailDestinatario = 'info@gaiapennisi.com'; 
      
      // Configura l'oggetto dell'email
      const oggetto = encodeURIComponent(`Contatto Portfolio - ${nome}`);
      
      // Crea il corpo del testo precompilato
      const corpoEmail = encodeURIComponent(
        `Nome: ${nome}\n` +
        `Email di risposta: ${emailUtente}\n\n` +
        `Messaggio:\n${messaggio}`
      );

      // Costruisci il link mailto finale
      const mailtoUrl = `mailto:${emailDestinatario}?subject=${oggetto}&body=${corpoEmail}`;

      // Apre l'applicazione di posta predefinita del sistema (Outlook, Mail, Gmail, ecc.)
      window.location.href = mailtoUrl;

      // Svuota i campi del modulo dopo l'apertura del client mail
      this.contattiForm.reset();
    } else {
      // Attiva i controlli visivi se l'utente tenta un invio non valido
      this.contattiForm.markAllAsTouched();
    }
  }
}
