import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
  photoCover: string = ""
  contentTitle: string = "MINHA NOTICIA"
  contentDescription: string = "Descrição da notícia"
  source: string = ""
  private id: string | null= "0"


  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe( value => {
      this.id = value['id'];
    }
  )

    this.setValuesToComponent(this.id)
    }

    setValuesToComponent(id: string | null){
      const result = dataFake.filter( article => article.id == id)[0]

      this.contentTitle = result.title
      this.contentDescription = result.description
      this.photoCover = result.photoCover
      this.source = result.source
    }
}
