
import React from "react";
import { Events } from "./components/UI/Events.jsx";
import { Search } from "./components/UI/Search.jsx";
import { CardChar } from "./components/UI/CardChar.jsx";
import { Sidebar } from "./components/UI/Sidebar.jsx";


export function App(){
    const events = [
        {"id":1, "image":"/imgs/image_card.png", "title": "Quizz React","percentage": "5%", "description":"Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...", "dateHour": "10 May, 10:00 AM", "btn1":"Course", "btn2":"Events"  },
        {"id":2, "image":"/imgs/image_card.png", "title": "Quizz React","percentage": "5%", "description":"Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...", "dateHour": "10 May, 10:00 AM", "btn1":"Course", "btn2":"Events"  },
        {"id":3, "image":"/imgs/image_card.png", "title": "Quizz React","percentage": "5%", "description":"Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...", "dateHour": "10 May, 10:00 AM", "btn1":"Course", "btn2":"Events"  },
        {"id":4, "image":"/imgs/image_card.png", "title": "Quizz React","percentage": "5%", "description":"Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...", "dateHour": "10 May, 10:00 AM", "btn1":"Course", "btn2":"Events"  },
        {"id":5, "image":"/imgs/image_card.png", "title": "Investigacion","percentage": "5%", "description":"Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...", "dateHour": "10 May, 10:00 AM", "btn1":"Course", "btn2":"Events"  },
        {"id":6, "image":"/imgs/image_card.png", "title": "Matricula TCU","percentage": "5%", "description":"Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...", "dateHour": "10 May, 10:00 AM", "btn1":"Course", "btn2":"Events"  },
    ]

   
        return (
          <div className="flex">
            <Sidebar />
            <div className="flex gap-10 justify-center">
            <div className="ml-32 w-2/3">
              <Search /> 
              <Events items={events}/> 
            </div>
            <div className="w-1/3">
            <CardChar />
            </div>
            </div>
          </div>
        );
      
}