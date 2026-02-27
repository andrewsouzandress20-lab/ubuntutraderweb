
import React from 'react';

const InvestingCalendarWidget: React.FC = () => {
  return (
    <div className="flex-1 w-full h-full flex flex-col bg-[#050814] rounded-2xl border border-slate-800/40 overflow-hidden">
      <div className="flex-1 w-full overflow-hidden">
        <iframe 
          src="https://sslecal2.investing.com?columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous&category=_employment,_economicActivity,_inflation,_centralBanks,_confidenceIndex&importance=3&features=datepicker,timezone,timeselector,filters&countries=25,6,37,5,39,35,43,72&calType=day&timeZone=12&lang=12" 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          allowTransparency={true} 
          marginWidth={0} 
          marginHeight={0}
          className="invert-[0.85] hue-rotate-180 opacity-90"
        ></iframe>
      </div>
      <div className="bg-[#0d1226]/90 backdrop-blur-md p-2 text-center border-t border-slate-800/40">
        <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
          Calendário Econômico por{' '}
          <a 
            href="https://br.investing.com/" 
            rel="nofollow" 
            target="_blank" 
            className="text-indigo-400 hover:text-indigo-300 transition-colors font-black"
          >
            Investing.com Brasil
          </a>
        </span>
      </div>
    </div>
  );
};

export default InvestingCalendarWidget;
