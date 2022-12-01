# SSS(SSAFY Safety Solution)

### 프로젝트 소개

#### 서비스 특징

- AI cctv 종합 안전 패키지

#### 주요기능

- Object Detection(YOLO) 으로 person을 탐지 후 Action Detection(clip)으로 행동 분석 

- Object Detection(YOLO)으로 person탐지 후 추적 알고리즘을 통하여 추적

- Object Detection(YOLO)으로 fire 및 smoke 감지

- Object Detection(slowfast)으로 공공안전 감지

- ip camera를 통한 실시간 스트리밍 구현 (화재, 미아, 공공안전)

- 실시간 스트리밍중 Detection 될때 마다 알림 전송

- 영상 업로드를 통한 AI Detection

- 카카오 API지도 Custom

#### **팀 소개**

- 강장호: 팀장, AI, Action Detection, Object Detection(화재)
- 김찬일: AI, Multiple Object Tracking(미아찾기)
- 박승주: 프론트엔드, 카카오맵, cctv, 미아찾기, video 업로드 및 실시간
- 이성훈: 프론트엔드, account, account manage, UCC제작
- 장종훈: 백엔드(accounts,missingchilds, video streaming) 
- 전승준: 백엔드(upload,cctvs) , 서버 배포


#### 개발환경

- FE: Vue 3, JavaScript, HTML5, pinia
- BE: Django, DB: Postgreas
- AI: Anaconda Pytorch Pandas Tenserboard OpenCV
- 운영체제 : Windows 10, MacOS 12
- 서버 : Amazon ec2, Ubuntu 20.04
- 기타 : GItLab, FIgma,Jira

#### 관리자 계정

아이디 : admin

비밀번호 : 1q2w3e4r

#### test유저 계정

아이디 : testuser

비밀번호 : testuser

#### 참조 리소스

- AWS : 서버

- Kakaomap : 지도

- YOLOv7: 화재 AI ,YOLOv7 + DeepSORT : 미아 AI

- slowfast : 공공안전AI

#### ERD

https://www.notion.so/DB-1c754584756c43978abaefdb22332fed

![DB.PNG](C:\Users\oem\Desktop\DB.PNG)

#### 

#### 와이어 프레임

[Figma](https://www.figma.com/file/oUIkqNDmjQHUDDSW34X8Tg/%ED%8A%B9%ED%99%94%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?node-id=0%3A1)

#### API

https://www.notion.so/API-d4f823b4a69d402cad2866205af59fe8

#### 기능 설명

- 회원관리
  
  - login
  
  - signup
  
  - Membership application
  
  - Withdrawal

- 관리자
  
  - Membership registration approval
  
  - user delete
  
  - user search

- cctv
  
  - cctv CRUD

- missing child data
  
  - child data CRUD

- upload
  
  - upload video save
  
  - AI result video (fire)
  
  - AI result video (missingchild)
  
  - AI result video (safety)

- streaming
  
  - normal streaming
  
  - AI streaming (fire)
  
  - AI streaming (missingchild)
  
  - AI streaming (safety)
