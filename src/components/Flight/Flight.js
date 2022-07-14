import React from 'react';
import s from '../Flight/Flight.css'
import { Legs } from '../Legs/Legs';

export const Fligth = ({id, legs, price}) => {
    
    return (
        <div className=''>
            
            <div className='FligthFormBlock'>
                <div className='FligthForm'> 
                    <div className='FligthHeader'>
                        <div className='FligthHeaderStyles'>
                            <div className='FligthPrice'>{ price} ₽</div>
                            <div className='FligthHeaderText'>Стоимость для одного взрослого пассажира</div>
                        </div>
                    </div>
                    <div className='LegsForm'>
                        {legs.map((leg, i) => <Legs
                            legData ={leg}
                            key={i}
                            departureCityZero={leg.segments[0]?.departureCity?.caption}
                            departureAirportZero={leg.segments[0]?.departureAirport?.caption}
                            departureAirportUidZero={leg.segments[0]?.departureAirport?.uid}
                            arrivalCityOne={leg.segments[1]?.arrivalCity?.caption}
                            arrivalAirportOne={leg.segments[1]?.arrivalAirport?.caption}
                            airoportAwayUidOne={leg.segments[1]?.arrivalAirport?.uid}
                            departureDateZero={leg.segments[0]?.departureDate}
                            arrivalDate={leg.segments[1]?.arrivalDate}
                            airline={leg.segments[0]?.airline?.caption}
                            segments={leg.segments}
                            arrivalCityZero={leg.segments[0]?.arrivalCity?.caption}
                            arrivalAirportZero={leg.segments[0]?.arrivalAirport?.caption}
                            airoportAwayUidZero={leg.segments[0]?.arrivalAirport?.uid}
                            arrivalDateZero={leg.segments[0]?.arrivalDate}
                        />)}
                    </div>               
                    <div className='ButtonChoose'>
                        <button className='ButtonChooseText'>Выбрать</button>
                    </div>   
                </div>
                
            </div>
            
            
        </div>
    )
}

