'use client';
import './menu.css';
import { ReactNode, useState } from "react";

export default function Home() {
	const [question, setQuestion] = useState<string | ReactNode>('');
	const [answer, setAnswer] = useState<string | ReactNode>('');
	const [id, setId] = useState('');
	const [state, setState] = useState(0);

	const backToBoard = () => {
		setState(0);
	}

	const showQuestion = (id?: string, question?: string | ReactNode, answer?: string | ReactNode) => {
		if(id && question && answer) {
			setId(id);
			setQuestion(question);
			setAnswer(answer);
		}
		setState(1);
	}

	const showAnswer = () => {
		var tile = document.querySelector<HTMLElement>(`#${id}`);
		if(tile?.firstChild) {
			(tile.firstChild as HTMLElement).setAttribute('style', 'color: var(--gray);')
		}
		
		setState(2);
	}

  return (
    <div>
        <div id='title'>
			Jeperdy!
		</div>
	    <div className='menu-item'>
            <a href='https://qauinger.com/jeperdy/units1to7'>Physics Units 1-7</a>
        </div>
        <div className='menu-item'>
        <a href='https://qauinger.com/jeperdy/units8to14'>Physics Units 8-14</a>
        </div>
    </div>
  )
}
