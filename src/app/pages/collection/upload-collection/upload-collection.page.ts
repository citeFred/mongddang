import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-collection',
  templateUrl: './upload-collection.page.html',
  styleUrls: ['./upload-collection.page.scss'],
})
export class UploadCollectionPage implements OnInit {
  public alertButtons = [
    {
      text: '취소',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: '확인',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  setResult(ev: CustomEvent) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }

  selectedMovie: HTMLElement | null = null; // 선택된 영화 요소 저장

  selectMovie(event: Event) {
    // 이벤트의 currentTarget을 HTMLElement로 타입 단언
    const movieElement = event.currentTarget as HTMLElement;

    // 현재 클릭된 요소가 이미 선택된 요소인지 확인
    if (this.selectedMovie === movieElement) {
      // 같은 요소를 다시 클릭하면 active 클래스 제거
      movieElement.classList.remove('active');
      this.selectedMovie = null; // 선택된 요소를 null로 초기화
    } else {
      // 이전에 선택된 영화에서 active 클래스를 제거
      if (this.selectedMovie) {
        this.selectedMovie.classList.remove('active');
      }

      // 클릭한 영화 요소에 active 클래스 추가
      movieElement.classList.add('active');
      this.selectedMovie = movieElement; // 선택된 요소를 저장
    }

    // "공유" 버튼 색깔 변경
    this.updateShareButtonStyle();
  }

  updateShareButtonStyle() {
    const shareButton = document.querySelector('.store_comment') as HTMLElement;

    if (this.selectedMovie) {
      shareButton.classList.add('active-share');
    } else {
      shareButton.classList.remove('active-share');
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
