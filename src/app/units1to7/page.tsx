'use client';
import '../jeperdy.css';
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
	<div className='board'>
		{state == 1 ?
			<div id='window'>
				<div id="button-top" onClick={(e) => backToBoard()}>← Back</div>
				<div id='window-text'>
					{question}
				</div>
				<div id="button-bottom" className='center' onClick={showAnswer}>Show Answer</div>
			</div>
		: null }
		{state == 2 ?
			<div id='window'>
				<div id="button-top" onClick={(e) => showQuestion()}>← Back</div>
				<div id='window-text'>
					{answer}
				</div>
				<div id="button-bottom" className='center' onClick={backToBoard}>Return</div>
			</div>
		: null }
		<div id='title'>
			Jeperdy!
		</div>
		<div className='row categories'>
			<div className='tile'>INTRO PHYSICS</div>
			<div className='tile'>ONE DIRECTIONAL MOTION</div>
			<div className='tile'>FORCES & NEWTONS LAWS</div>
			<div className='tile'>VECTOR QUANTITIES & APPLICATION</div>
			<div className='tile'>CIRCULAR MOTION & GRAVITATION</div>
			<div className='tile'>MOMENTUM</div>
			<div className='tile'>WORK & ENERGY</div>
		</div>
		<div className='row clues'>
			<div id='a1' className='tile' onClick={(event) => showQuestion('a1', <>How many significant figures does 3.129 have?</>, <>4 significant figures</>)}>
				<div className='question-value'><span className='dollar'>$</span>200</div>
			</div>
			<div id='a2' className='tile' onClick={(event) => showQuestion('a2', <>What is the equation for velocity?</>, <>v=<sup>d</sup>/<sub>t</sub></>)}>
				<div className='question-value'><span className='dollar'>$</span>200</div>
			</div>
			<div id='a3' className='tile' onClick={(event) => showQuestion('a3', <>Newton&apos;s first Law states an object in motion will ____ in motion unless acted on by an outside force.</>, <>Stay</>)}>
				<div className='question-value'><span className='dollar'>$</span>200</div>
			</div>
			<div id='a4' className='tile' onClick={(event) => showQuestion('a4', <>If a women runs 100 meters north and then 70 meters south, what will her total displacment be?</>, <>30 meters north</>)}>
				<div className='question-value'><span className='dollar'>$</span>200</div>
			</div>
			<div id='a5' className='tile' onClick={(event) => showQuestion('a5', <>What is the equation for centripetal force?</>, <>F=<sup>mv<sup>2</sup></sup>/<sub>r</sub></>)}>
				<div className='question-value'><span className='dollar'>$</span>200</div>
			</div>
			<div id='a6' className='tile' onClick={(event) => showQuestion('a6', <>What is the formula for momentum?</>, <>p=mv</>)}>
				<div className='question-value'><span className='dollar'>$</span>200</div>
			</div>
			<div id='a7' className='tile' onClick={(event) => showQuestion('a7', <>What is the formula for work?</>, <>W=Fd</>)}>
				<div className='question-value'><span className='dollar'>$</span>200</div>
			</div>
		</div>
		<div className='row clues'>
			<div id='b1' className='tile' onClick={(event) => showQuestion('b1', <>What is the SI unit of mass is measured in?</>, <>Kilograms (kg)</>)}>
				<div className='question-value'><span className='dollar'>$</span>400</div>
			</div>
			<div id='b2' className='tile' onClick={(event) => showQuestion('b2', <>What is the unit of velocity?</>, <>meters/second</>)}>
				<div className='question-value'><span className='dollar'>$</span>400</div>
			</div>
			<div id='b3' className='tile' onClick={(event) => showQuestion('b3', <>An object slides to the right on a frictional surface. What direction does the frictional force point?</>, <>Left</>)}>
				<div className='question-value'><span className='dollar'>$</span>400</div>
			</div>
			<div id='b4' className='tile' onClick={(event) => showQuestion('b4', <>Speed is an example of a ______ quantity.</>, <>Scalar</>)}>
				<div className='question-value'><span className='dollar'>$</span>400</div>
			</div>
			<div id='b5' className='tile' onClick={(event) => showQuestion('b5', <>The movement of an object at constant speed around a circle with a fixed radius resulting in a change of direction is referred to as _______ ________ ______.</>, <>Uniform circular motion</>)}>
				<div className='question-value'><span className='dollar'>$</span>400</div>
			</div>
			<div id='b6' className='tile' onClick={(event) => showQuestion('b6', <>The definition of change in momentum is _______.</>, <>Impulse</>)}>
				<div className='question-value'><span className='dollar'>$</span>400</div>
			</div>
			<div id='b7' className='tile' onClick={(event) => showQuestion('b7', <>How much work is done on an object if a force of 30 newtons displaces the object 200 meters?</>, <>6000 Joules</>)}>
				<div className='question-value'><span className='dollar'>$</span>400</div>
			</div>
		</div>
		<div className='row clues'>
			<div id='c1' className='tile' onClick={(event) => showQuestion('c1', <>What is 54,200 in scientific notation?</>, <>5.42x10<sup>4</sup></>)}>
				<div className='question-value'><span className='dollar'>$</span>600</div>
			</div>
			<div id='c2' className='tile' onClick={(event) => showQuestion('c2', <>An object with an initial velocity of 47.0 m/s accelerates uniformly at 2.0 m/s<sup>2</sup> for 9.0 seconds. What is the displacement of the object at the end of the 9.0 seconds?</>, <>About 500 meters</>)}>
				<div className='question-value'><span className='dollar'>$</span>600</div>
			</div>
			<div id='c3' className='tile' onClick={(event) => showQuestion('c3', <>A vertical spring 0.100 meters long is elongated to a length of 0.119 meters when a 1.00 kilogram mass is attached to the bottom of the spring. What is the spring constant?</>, <>516 N/m</>)}>
				<div className='question-value'><span className='dollar'>$</span>600</div>
			</div>
			<div id='c4' className='tile' onClick={(event) => showQuestion('c4', <>A ball is kicked with an initial velocity of 10 m/s at an angle of 30<sup>o</sup> above the horizontal. The horizontal component of the ball&apos;s initial velocity is...</>, <>8.7 m/s</>)}>
				<div className='question-value'><span className='dollar'>$</span>600</div>
			</div>
			<div id='c5' className='tile' onClick={(event) => showQuestion('c5', <>A 5.0 kilogram object travels clockwise in a horizontal circle with a speed of 20 m/s. The radius of the circular path is 25 meters. What is the centripetal force on the object?</>, <>80 Newtons</>)}>
				<div className='question-value'><span className='dollar'>$</span>600</div>
			</div>
			<div id='c6' className='tile' onClick={(event) => showQuestion('c6', <>A car has a mass of 1.0 x 10<sup>3</sup> kilograms with a speed of 1.4 x 10<sup>2</sup> meters per second. What is the impulse required to bring the car to rest?</>, <>1.4 x 10<sup>5</sup> N•s</>)}>
				<div className='question-value'><span className='dollar'>$</span>600</div>
			</div>
			<div id='c7' className='tile' onClick={(event) => showQuestion('c7', <>A 0.50 kg ball is projected vertically and rises to a height of 2.0 meters above the ground. Calculate the increase in the ball&apos;s potential energy.</>, <>9.8 Joules</>)}>
				<div className='question-value'><span className='dollar'>$</span>600</div>
			</div>
		</div>
		<div className='row clues'>
			<div id='d1' className='tile' onClick={(event) => showQuestion('d1', <>What is 0.03 km in centimeters?</>, <>3000 cm</>)}>
				<div className='question-value'><span className='dollar'>$</span>800</div>
			</div>
			<div id='d2' className='tile' onClick={(event) => showQuestion('d2', <>An object is dropped from rest from a height of 49 meters. How long does the object take to hit the ground?</>, <>3.2 seconds</>)}>
				<div className='question-value'><span className='dollar'>$</span>800</div>
			</div>
			<div id='d3' className='tile' onClick={(event) => showQuestion('d3', <>An object with a mass of 0.5 kg starts from rest and achieves a maximum speed of 20 meters per second in 0.1 seconds. What is the average force accelerating the object?</>, <>100 Newtons</>)}>
				<div className='question-value'><span className='dollar'>$</span>800</div>
			</div>
			<div id='d4' className='tile' onClick={(event) => showQuestion('d4', <>An object weighing 24 newtons is placed on a 30 degree slope. The component of the weight acting parallel to the slope is closest to...</>, <>12 Newtons</>)}>
				<div className='question-value'><span className='dollar'>$</span>800</div>
			</div>
			<div id='d5' className='tile' onClick={(event) => showQuestion('d5', <>Given that the earth has a mass of 6.0x10<sup>24</sup> kg, calculate the gravitational acceleration of a satellite that is in orbit at a distance of 1.0x10<sup>8</sup> meters from the center of the Earth.</>, <>0.040 m/s<sup>2</sup> towards the center of the earth</>)}>
				<div className='question-value'><span className='dollar'>$</span>800</div>
			</div>
			<div id='d6' className='tile' onClick={(event) => showQuestion('d6', <>A 0.50 kg object traveling at 2.0 m/s collides with a 0.30 kg object traveling at 4.0 m/s. After the collision, the 0.30 kg object is traveling at 2.0 m/s. What are the magnitude and the direction of the velocity of the first object?</>, <>1.6 m/s</>)}>
				<div className='question-value'><span className='dollar'>$</span>800</div>
			</div>
			<div id='d7' className='tile' onClick={(event) => showQuestion('d7', <>A spring whose constant is 2.0 N/m is stretched 0.40 meters from its equilibrium position. What is the increase in the elastic potential energy of the spring?</>, <>0.16 Joules</>)}>
				<div className='question-value'><span className='dollar'>$</span>800</div>
			</div>
		</div>
	</div>
  )
}
