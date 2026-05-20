import { Component, signal } from '@angular/core';

interface CapoRealizzato {
  titolo: string;
  categoria: string;
  tessuto: string;
  anno: string;
  descrizione: string;
  immagine: string;
}

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class BlogComponent {
  // Array dinamico con l'archivio dei capi e dei prototipi di Gaia
  public capi = signal<CapoRealizzato[]>([
    {
      titolo: 'Cappotto Doppiopetto in Lana',
      categoria: 'Capispalla',
      tessuto: '100% Lana Vergine & Fodera in Seta',
      anno: 'Collezione A/I 2025',
      descrizione: 'Costruzione del modello industriale, gestione del sottomanica a due pezzi e sdifettamento della spallina strutturata.',
      immagine: 'assets/images/cappotto.jpg'
    },
    {
      titolo: 'Abito Fluido Drappeggiato',
      categoria: 'Abiti da Sera',
      tessuto: 'Chiffon di Seta',
      anno: 'Capsule Alta Moda',
      descrizione: 'Sviluppo del modello tramite tecnica Moulage direttamente su manichino. Gestione dello sbieco e della stabilità delle cuciture.',
      immagine: 'assets/images/abito-fluido.jpg'
    },
    {
      titolo: 'Completo Blazer & Pantalone',
      categoria: 'Sartoriale Donna',
      tessuto: 'Fresco di Lana',
      anno: 'Prêt-à-Porter 2026',
      descrizione: 'Passaggio a sistema CAD del cartamodello cartaceo, impostazione dello sviluppo taglie dalla 38 alla 48 e calcolo dei consumi di piazzamento.',
      immagine: 'assets/images/completo.jpg'
    }
  ]);

  // Signal per salvare il progetto selezionato (all'inizio è vuoto / null)
  public progettoSelezionato = signal<CapoRealizzato | null>(null);

  // Funzione per aprire la finestra di dettaglio
  public apriDettaglio(progetto: CapoRealizzato): void {
    this.progettoSelezionato.set(progetto);
  }

  // Funzione per chiudere la finestra di dettaglio
  public chiudiDettaglio(): void {
    this.progettoSelezionato.set(null);
  }
}
