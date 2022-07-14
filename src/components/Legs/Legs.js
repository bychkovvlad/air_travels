import React from 'react';
import s from '../Legs/Legs.css'

export const Legs = ({id, arrivalDateZero, arrivalCityOne, arrivalAirportOne, airoportAwayUidOne, segments, legData, airline, arrivalDate, departureDateZero, departureCityZero, departureAirportZero, departureAirportUidZero, arrivalCityZero, arrivalAirportZero, airoportAwayUidZero  }) => {
     function segment(arr){
         let a = arr.length - 1;
         if (a >= 1) {
             return a + ' ' + 'пересадка'
         } else {
             return 'прямой'
         }
        
    };
    
        { if(segments.length > 1) {
        return (
            <div className='LegsForm'> 
            <div className='LegsHome'>
                <div className='LegsZero'>
                    <div className='LegsCounrty'>{departureCityZero},</div>
                    <div className='LegsAiroport'> {departureAirportZero}</div>
                    <div className='LegsAiroportUid'>({departureAirportUidZero})</div>
                    <div className='LegsAiroportUid'>→</div>
                    <div className='LegsCounrty'>{arrivalCityOne}, </div>
                    <div className='LegsAiroport'>{arrivalAirportOne} </div>
                    <div className='LegsAiroportUid'>({airoportAwayUidOne})</div>
                </div>
                <div className='SpanDiv'></div>
                <div className='LegsTime'>
                    <div>{departureDateZero}</div>
                    <div></div>
                    <div>{arrivalDate}</div>
                </div>
                <div className='tensferDiv'>
                    <div className='SpanTensferDiv'></div>
                    <div className='tensferText'>{segment(legData.segments)}</div>
                    <div className='SpanTensferDiv'></div>
                </div>
                <div className='AirlineText'>
                    <div>Рейс выполняет: {airline}</div>
                </div>
                <div className='SpanBlockDiv'></div>
            </div>
        </div>
        )
    } else if (segments.length === 1) {
        return (
            <div className='LegsForm'> 
            <div className='LegsHome'>
                <div className='LegsZero'>
                    <div className='LegsCounrty'>{departureCityZero},</div>
                    <div className='LegsAiroport'> {departureAirportZero}</div>
                    <div className='LegsAiroportUid'>({departureAirportUidZero})</div>
                    <div className='LegsAiroportUid'>→</div>
                    <div className='LegsCounrty'>{arrivalCityZero}, </div>
                    <div className='LegsAiroport'>{arrivalAirportZero} </div>
                    <div className='LegsAiroportUid'>({airoportAwayUidZero})</div>
                </div>
                <div className='SpanDiv'></div>
                <div className='LegsTime'>
                    <div>{departureDateZero}</div>
                    <div></div>
                    <div>{arrivalDateZero}</div>
                </div>
                <div className='tensferDiv'>
                    <div className='SpanTensferDiv'></div>
                    <div className='tensferText'>{segment(legData.segments)}</div>
                    <div className='SpanTensferDiv'></div>
                </div>
                <div className='AirlineText'>
                    <div>Рейс выполняет: {airline}</div>
                </div>
                <div className='SpanBlockDiv'></div>
            </div>
        </div>
        )
    }
}
    
}