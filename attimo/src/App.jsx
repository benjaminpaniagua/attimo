
import React from "react";
import { Events } from "./components/UI/Events.jsx";
import { Search } from "./components/UI/Search.jsx";
import { Sidebar } from "./components/UI/Sidebar.jsx";

export function App(){
    const events = [
        {"id":1, "image":"/../../assets/imgs/image_card.png", "title": "Quizz React","percentage": "5%", "description":"Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...", "dateHour": "10 May, 10:00 AM", "btn1":"Course", "btn2":"Events"  },
        {"id":2, "image":"/../../assets/imgs/image_card.png", "title": "Quizz React","percentage": "5%", "description":"Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...", "dateHour": "10 May, 10:00 AM", "btn1":"Course", "btn2":"Events"  },
        {"id":3, "image":"/../../assets/imgs/image_card.png", "title": "Quizz React","percentage": "5%", "description":"Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...", "dateHour": "10 May, 10:00 AM", "btn1":"Course", "btn2":"Events"  },
        {"id":4, "image":"/../../assets/imgs/image_card.png", "title": "Quizz React","percentage": "5%", "description":"Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...", "dateHour": "10 May, 10:00 AM", "btn1":"Course", "btn2":"Events"  },
        {"id":5, "image":"/../../assets/imgs/image_card.png", "title": "Quizz React","percentage": "5%", "description":"Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...", "dateHour": "10 May, 10:00 AM", "btn1":"Course", "btn2":"Events"  },
        {"id":6, "image":"/../../assets/imgs/image_card.png", "title": "Quizz React","percentage": "5%", "description":"Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...", "dateHour": "10 May, 10:00 AM", "btn1":"Course", "btn2":"Events"  },

    ]

   
        return (
          <div className="flex">
            <Sidebar />
            <div className="ml-32 w-2/3">
              <Search /> 
              <Events items={events}/> 
            </div>
          </div>
        );
      
}