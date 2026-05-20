import { Component, signal } from '@angular/core';

interface TecnologiaSartoriale {
  titolo: string;
  descrizione: string;
  badgeSoftware: string[];
}

@Component({
  selector: 'app-about',
  imports: [], 
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  // Gestione dinamica delle tecnologie tramite i Signals di Angular
  public strumenti = signal<TecnologiaSartoriale[]>([
    {
      titolo: 'CAD Industriale',
      descrizione: 'Sviluppo taglie geometrico, digitalizzazione dei pezzi a sistema, controllo meticoloso dei perimetri e piazzamento industriale automatizzato per ottimizzare i consumi del tessuto.',
      badgeSoftware: ['Lectra Modaris']
    },
    {
      titolo: 'Tecniche di Atelier',
      descrizione: 'Costruzione cartamodelli manuali per capispalla strutturati, drappeggi complessi in sbieco, sdifettamento ottico su manichino e stesura di schede tecniche di produzione.',
      badgeSoftware: ['Moulage', 'Sdifettamento Prototipi']
    }
  ]);
}
