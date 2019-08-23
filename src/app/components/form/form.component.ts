import { Component, OnInit } from "@angular/core";
import { User } from "src/app/user";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  user = new User("Dev", "Bhatt", "", "", "", "", true);
  constructor() {}

  ngOnInit() {}
}
