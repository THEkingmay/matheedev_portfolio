import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePortstore = defineStore('portfolio',{
  state: () => ({ 
    currentpage:'',
    selectedProject:'',
    listsCproject:[
      {
        name:'Basic Calender',
        Description:'1.โปรแกรมนี้สร้างและแสดงปฏิทินสำหรับปีที่ผู้ใช้ระบุได้อย่างมีประสิทธิภาพ.\n\n2.ใช้ฟังก์ชัน month_khom สำหรับเดือนที่มี 31 วัน ใช้ฟังก์ชัน month_pun สำหรับเดือนกุมภาพันธ์ที่มี 28 หรือ 29 วัน ใช้ฟังก์ชัน month_yon สำหรับเดือนที่มี 30 วัน.\n\n3.โปรแกรมรับปีจากผู้ใช้ซึ่งต้องมากกว่าปี 2023 แสดงปฏิทินของทุกปีตั้งแต่ปีที่กำหนดจนถึงปีที่ผู้ใช้ระบุ.\n\n4.โปรแกรมมีการเคลียร์หน้าจอเพื่อเตรียมการแสดงปฏิทินใหม่ในแต่ละปี, โดยเฉพาะสำหรับระบบ Windows',
        img:'',
        vedio:'/video/c-calender.mp4',
        codelink:'https://github.com/THEkingmay/calender_logic_C/blob/main/index.c',
        playlink:''
      },{
        name:'Hangman game',
        Description:'1.โปรแกรม Hangman นี้เริ่มต้นโดยการรวมไลบรารีพื้นฐานเพื่อการทำงานกับสตริงและเวลา. \n\n2.ประกาศฟังก์ชัน displayword เพื่อแสดงคำที่ถูกทายโดยแทนที่ตัวอักษรที่ยังไม่ถูกทายด้วย _. \n\n3.โปรแกรมจะสุ่มเลือกคำจากรายการคำศัพท์ที่กำหนดไว้และคัดลอกคำนี้ไปยังตัวแปร wordscp. \n\n4.โปรแกรมจะตั้งค่าชีวิตของผู้เล่นที่ 3 และเตรียมแสดงคำที่ถูกแทนด้วย _. \n\n5.แสดงคำเริ่มต้นที่มี _ และคำใบ้แรกเพื่อช่วยผู้เล่นในการทาย. \n\n6.ผู้เล่นจะป้อนตัวอักษรที่ต้องการทาย, โดยหากตัวอักษรถูกต้อง ตัวอักษรนั้นจะถูกแทนที่ในคำที่ทาย. \n\n7.ผู้เล่นสามารถขอคำใบ้เพิ่มเติมได้สูงสุด 3 ครั้ง โดยป้อน 9. \n\n8หากผู้เล่นทายผิด, ชีวิตจะลดลง 1 จนกว่าจะหมดชีวิตหรือคำจะถูกทายถูกต้อง. \n\n9.เมื่อจบเกม, หากทายคำถูกต้องจะมีข้อความแสดงความยินดี, ถ้าผิดจะเปิดเผยคำที่ถูกต้องและเชิญชวนให้ลองใหม่. \n\n10.ฟังก์ชัน displayword ใช้ในการแสดงคำที่กำลังถูกทายโดยแสดงตัวอักษรที่ถูกทายถูกและ _ สำหรับตัวอักษรที่ยังไม่ถูกทาย. \n',
        img:'',
        vedio:'/video/c-basic-hangman.mp4',
        codelink:'https://github.com/THEkingmay/basic_HangMan_C',
        playlink:''
      }
    ],
    listsJavaproject:[
      {
        name:'Pop & Play',
        Description:'1.ประเภทของเกม: เกมนี้ดูเหมือนจะเป็นเกมแนวแคชชวล (Casual Game) ที่เน้นการสะสมคะแนนและการโต้ตอบกับผู้ใช้ ตัวเกมอาจเกี่ยวข้องกับการแก้ปริศนา (Puzzle) หรือการเล่นแบบอาร์เคด (Arcade) ที่มุ่งหวังให้ผู้เล่นทำคะแนนสูงสุด\n\n2.องค์ประกอบหลักของเกม: ไฟล์สำคัญเช่น GameController.java และ Main.java บ่งบอกถึงฟังก์ชันหลักของเกม เช่น การจัดการการป้อนข้อมูลจากผู้ใช้ การควบคุมสถานะของเกม และวงจรการทำงานหลักของเกม (Game Loop) ซึ่งเป็นส่วนสำคัญในการรันและจัดการการเล่นเกม\n\n3.การรับรองตัวตนผู้ใช้: ไฟล์ login.java แสดงถึงส่วนของการจัดการการเข้าสู่ระบบผู้ใช้ ซึ่งอาจมีการบันทึกข้อมูลผู้เล่นหรือคะแนนใน bestscore.txt เพื่อให้สามารถติดตามคะแนนสูงสุดได้\n\n4.การสร้างเนื้อหาแบบไดนามิก: ไฟล์ generate.java บ่งชี้ถึงความสามารถในการสร้างเนื้อหาหรือระดับของเกมแบบไดนามิก ซึ่งอาจทำให้การเล่นมีความท้าทายและไม่ซ้ำซาก\n\n5.การตั้งค่าหรือรีสตาร์ทเกม: ไฟล์ restart.java น่าจะเกี่ยวข้องกับการตั้งค่าใหม่หรือการเริ่มต้นเกมใหม่ ซึ่งช่วยให้ผู้เล่นสามารถเริ่มเกมใหม่ได้อย่างง่ายดาย\n\n',
        img:'',
        vedio:'/video/pop&play.mp4',
        codelink:'https://github.com/THEkingmay/pop_pap',
        playlink:''
      },
      {
        name:'Tic-Tac-Toe',
        Description:'1.ประเภทของเกม: เกมนี้เป็นเกม Tic-Tac-Toe หรือ O-X ที่รู้จักกันดี ซึ่งเป็นเกมกระดานที่ผู้เล่นสองคนผลัดกันวางเครื่องหมายของตน (X หรือ O) ลงในตาราง 3x3 โดยมีเป้าหมายคือการจัดเรียงเครื่องหมายของตนให้ครบสามช่องในแนวตั้ง แนวนอน หรือแนวทแยงมุมก่อนคู่แข่ง\n\n2.องค์ประกอบหลักของเกม: เกมนี้ประกอบด้วยไฟล์หลักเช่น GamePanel.java, Main.java, และ TicTacToe.java ซึ่งจัดการฟังก์ชันหลักของเกม ไม่ว่าจะเป็นการแสดงกระดานเกม การควบคุมการเล่นเกม และการตรวจสอบผู้ชนะ ระบบการเล่นและการควบคุมถูกออกแบบมาเพื่อให้การเล่นเกมเป็นไปอย่างราบรื่นและง่ายต่อการเข้าใจ\n\n3.การจัดการการแสดงผล: ไฟล์ GamePanel.java ทำหน้าที่เป็นส่วนควบคุมการแสดงผลเกมบนหน้าจอ (GUI) รวมถึงการวาดกระดานเกมและการตอบสนองต่อการคลิกของผู้เล่นบนช่องว่างของตาราง\n\n4.ตรรกะของเกม: ไฟล์ TicTacToe.java น่าจะเป็นที่ที่เก็บตรรกะของเกม เช่น การตรวจสอบว่ามีผู้เล่นคนใดชนะหรือไม่ หรือการสลับการเล่นระหว่าง X และ O ไฟล์นี้มีบทบาทสำคัญในการทำให้เกมทำงานได้อย่างถูกต้องและยุติธรรม\n\n5.การเริ่มต้นและการควบคุม: ไฟล์ Main.java ทำหน้าที่เริ่มต้นโปรแกรมและตั้งค่าเริ่มต้นของเกม ซึ่งเป็นจุดเริ่มต้นที่รวมทุกส่วนเข้าด้วยกันเพื่อเริ่มเกม\n\n',
        img:'',
        vedio:'/video/tictactoe.mp4',
        codelink:'https://github.com/THEkingmay/tictactoe_Java',
        playlink:''
      }
    ],
    listsWebproject:[
      {
        name:'Werewolf V1',
        Description:'1.ประเภทของเกม: เกมนี้เป็นเกมแนว Werewolf (หรือที่บางครั้งเรียกว่า Mafia) ซึ่งเป็นเกมแบบเล่นเป็นกลุ่มที่มักเล่นในสถานการณ์สมมติ ผู้เล่นจะได้รับบทบาทต่าง ๆ เช่น มนุษย์หมาป่า, ชาวบ้าน, หรือบทบาทพิเศษอื่น ๆ โดยผู้เล่นต้องใช้การสื่อสารและการสังเกตเพื่อค้นหาว่าใครเป็นมนุษย์หมาป่าในกลุ่ม\n\n2.องค์ประกอบหลักของเกม: เกมนี้ประกอบด้วยหลายไฟล์ที่สำคัญ เช่น Main.java, Player.java, และ GameManager.java ที่ช่วยในการจัดการฟังก์ชันหลักของเกม ตั้งแต่การตั้งค่าเกม การควบคุมลำดับการเล่น ไปจนถึงการจัดการสถานะของผู้เล่นแต่ละคน\n\n3.การจัดการผู้เล่น: ไฟล์ Player.java แสดงถึงการสร้างและการจัดการข้อมูลของผู้เล่น รวมถึงบทบาทที่พวกเขาได้รับ ซึ่งเป็นส่วนสำคัญในการกำหนดว่าใครจะเป็นมนุษย์หมาป่าหรือชาวบ้าน\n\n4.การควบคุมเกม: GameManager.java มีบทบาทในการจัดการลำดับการเล่นและการควบคุมเกมทั้งหมด รวมถึงการเริ่มเกม การดำเนินการในเวลากลางวันและกลางคืน และการตัดสินใจเกี่ยวกับการโหวตและการลงโทษ\n\n5.อินเตอร์เฟซและการโต้ตอบ: ไฟล์ Main.java และ GamePanel.java เกี่ยวข้องกับการแสดงผลและการโต้ตอบของผู้ใช้ ซึ่งช่วยให้เกมมีอินเตอร์เฟซที่สามารถเข้าถึงได้ง่ายและสามารถสื่อสารกับผู้เล่นได้ชัดเจน\n\n',
        img:'',
        vedio:'/video/Werewolf.mp4',
        codelink:'https://github.com/THEkingmay/WarewoftV1',
        playlink:'https://matheewarewolf.netlify.app/'
      },
      {
        name:'Basic todo list ',
        Description:'โปรแกรมสร้างด้วย Vue framework เป็นโปรแกรม "To-do list" เบื้องต้น \n\nโดยมีส่วนสำคัญดังนี้: \nในโฟลเดอร์ src ประกอบด้วยคอมโพเนนต่างๆ โดยใน src ยังมีโฟลเดอร์ views ซึ่งประกอบไปด้วยไฟล์ Vue HomeView.vue เป็นหน้าหลักที่แสดงผลของรายการ To-do list ส่วนหน้า detail.vue เป็นหน้าที่ให้ใส่รายละเอียดของงานได้ และ Edit.vue เป็นหน้าแก้ไขงาน \nทั้ง 3 หน้านี้ทำงานร่วมกับ Pinia และ router เป็นตัวกลางในการรับส่งข้อมูล ข้อมูลงานต่างๆ จะถูกบันทึกลงใน LocalStorage \n\nตกแต่งสไตล์ด้วย Tailwind CSS framework และ Daisy UI.',
        img:'',
        vedio:'/video/todo.mp4',
        codelink:'https://github.com/THEkingmay/lemmehelpU',
        playlink:'https://lemmehelpu.netlify.app/'
      }
    ]
  }),
  actions: { 
    checkselect(lang,index){
      if(lang==='C'){
        this.selectedProject=this.listsCproject[index]
        console.log("Select:",this.selectedProject)
      }else if(lang==='Java'){
        this.selectedProject=this.listsJavaproject[index]
        console.log("Select:",this.selectedProject)
      }else if(lang==='Web'){
        this.selectedProject=this.listsWebproject[index]
        console.log("Select:",this.selectedProject)
      }
    },
    chagepageStore(page){
      if(page=='C')this.currentpage='C'
      else if(page=='Java')this.currentpage='Java'
      else if(page=='Web')this.currentpage='Web'
    }
  }
})