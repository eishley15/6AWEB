import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  title = "My First App!"
  description = "This is my new Angular Application"
  imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAoST986eFriVb_4go2mj4D_YvoujmMtKCEg&s'
  w = 100;
  h = 100;
  altText = 'HBD Micah'

  heartUrl = 'https://cdn-icons-png.flaticon.com/128/833/833472.png'
  notheartUrl = 'https://cdn-icons-png.flaticon.com/128/10106/10106859.png'


  textColor='black';

  yourName ='';

  count = 0;
  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  // Interpolation
  studentName = "Ventolero, Christian E.";
  score = 94;

  // Property Binding
  imageUrl2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP8JkgsSqsCVNPOqD77LwKW89KbHKuhlHZQw&s";
  isDisabled = true;

  // Attribute binding
  colSpanValue = 3;

  // Class binding
  isPassing = true;

  // Style binding
  boxColor = "purple";
  boxSize = "150px";
}