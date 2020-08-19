import {Component, OnInit} from '@angular/core';
import {Note} from './note.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: Note[] = [
    new Note('Usage Guide', 'Start a note by clicking the plus sign below'),
    new Note('Hello world', 'Bla bla'),
    new Note('Lorem Ipsum', ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur neque non lectus bibendum, sed elementum odio facilisis. Suspendisse eu pharetra nibh. Suspendisse finibus tincidunt eleifend. Ut ut ligula vel eros gravida accumsan at sit amet nulla. Nulla pharetra tristique efficitur. Vestibulum pretium magna ipsum, in dignissim mauris varius nec. Integer pulvinar tellus ante, id facilisis leo porttitor tristique. In quis justo eros. Integer sit amet lobortis orci. Curabitur congue fermentum fringilla. Etiam id varius lorem, non semper justo.\n' +
      '\n' +
      'Maecenas sodales risus tempus enim pellentesque egestas. Quisque porttitor nec magna ut rhoncus. Aenean non mollis lacus. Etiam vulputate dui ex, in consectetur mauris eleifend sit amet. Nullam quis lacinia purus. Suspendisse urna elit, ornare in odio sit amet, mattis blandit lacus. Ut non orci mattis, elementum leo gravida, luctus purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla sem risus, sodales non neque at, ultrices pharetra diam. Curabitur suscipit eu mauris id viverra. Suspendisse accumsan est ornare, posuere quam eu, dignissim nulla. Donec feugiat magna ut feugiat tincidunt. Donec facilisis felis in tellus vestibulum tempor. Maecenas erat orci, dictum vitae orci et, facilisis fringilla felis. Fusce blandit, justo aliquet vehicula lacinia, velit erat pellentesque dui, vitae convallis metus erat sed massa. Vestibulum euismod ac ligula a suscipit.\n' +
      '\n' +
      'Aenean viverra sollicitudin eros, ac bibendum tellus porttitor non. Sed iaculis placerat scelerisque. Nam enim sem, fermentum ut diam eget, tempor scelerisque sem. In non ante posuere, aliquet nunc a, fringilla metus. Nulla aliquam purus faucibus fermentum ultrices. Vestibulum semper posuere diam, non aliquam leo rutrum a. In eget congue lorem, eget maximus orci. Curabitur viverra est suscipit laoreet mollis. Phasellus iaculis purus justo, ac vehicula turpis imperdiet ut. Aenean dolor massa, tempus tristique commodo vel, suscipit sed ex.\n' +
      '\n' +
      'Duis id ullamcorper nulla. Phasellus diam lorem, hendrerit a lacus tempus, rutrum finibus ipsum. Suspendisse venenatis odio sit amet gravida pulvinar. Quisque elementum posuere augue id eleifend. Etiam velit dolor, tincidunt ac nulla eget, eleifend maximus massa. Ut tincidunt mi odio, sed aliquet metus mollis et. Integer at felis finibus, gravida sapien condimentum, porttitor mi. Donec dapibus enim a posuere bibendum. Donec lacus nisi, rutrum et condimentum eu, mollis sed eros. Aenean blandit odio arcu, viverra bibendum nibh fringilla eget. Etiam egestas non turpis id ornare. Aenean efficitur tristique orci, eget posuere urna gravida eu. Donec pharetra ornare nibh, accumsan malesuada nisi laoreet id. Sed tellus est, varius at vehicula non, tempus non sem.\n' +
      '\n' +
      'Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus eget odio sit amet dui sodales fringilla in id ante. Nullam consectetur tempus mauris non dictum. Sed ipsum justo, feugiat id eros eget, faucibus euismod tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque metus sem, semper eget libero dignissim, feugiat consectetur dolor. Vivamus dignissim in nunc in blandit. Duis ligula urna, mattis nec ex et, dapibus pretium lacus. Cras nec urna porta, faucibus turpis sed, tempor lectus.\n' +
      '\n' +
      'In bibendum cursus fringilla. Nam vitae auctor sem. Ut ac nibh vulputate, gravida mauris a, gravida urna. Quisque ultricies molestie mattis. In hendrerit elit ac elit sagittis scelerisque. Donec volutpat erat quis ipsum maximus, eu fringilla enim congue. Etiam ultrices scelerisque lobortis. Phasellus varius tellus id tincidunt laoreet.\n' +
      '\n' +
      'Pellentesque elementum neque ac felis consectetur, nec iaculis felis dapibus. Donec quis lacus ligula. Nulla facilisis semper purus, at luctus orci tristique ac. Duis eleifend porttitor dolor, at laoreet massa luctus ac. Nulla faucibus purus vitae risus lobortis vehicula. Praesent ut ipsum eget nisl facilisis rutrum id in tellus. Nulla fringilla ex in nibh ullamcorper sodales. Donec iaculis est eu commodo semper. Duis vulputate ornare augue sed porta. Sed blandit rutrum varius. Curabitur tempor a nibh ac tincidunt. Phasellus eget blandit eros, bibendum pretium massa. Morbi eget ante ex. Curabitur vitae libero in enim dapibus vulputate. '),
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  addNote(note1: Note): void {

    this.notes.push(note1);
  }
}
