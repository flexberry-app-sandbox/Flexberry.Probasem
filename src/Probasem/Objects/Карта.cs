﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Probasem
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Карта.
    /// </summary>
    // *** Start programmer edit section *** (Карта CustomAttributes)

    // *** End programmer edit section *** (Карта CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КартаE", new string[] {
            "КодКарты as \'Код карты\'",
            "ТипКарты as \'Тип карты\'"})]
    [View("КартаL", new string[] {
            "КодКарты as \'Код карты\'",
            "ТипКарты as \'Тип карты\'"})]
    public class Карта : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодКарты;
        
        private IIS.Probasem.ВидКарты fТипКарты;
        
        // *** Start programmer edit section *** (Карта CustomMembers)

        // *** End programmer edit section *** (Карта CustomMembers)

        
        /// <summary>
        /// КодКарты.
        /// </summary>
        // *** Start programmer edit section *** (Карта.КодКарты CustomAttributes)

        // *** End programmer edit section *** (Карта.КодКарты CustomAttributes)
        public virtual int КодКарты
        {
            get
            {
                // *** Start programmer edit section *** (Карта.КодКарты Get start)

                // *** End programmer edit section *** (Карта.КодКарты Get start)
                int result = this.fКодКарты;
                // *** Start programmer edit section *** (Карта.КодКарты Get end)

                // *** End programmer edit section *** (Карта.КодКарты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Карта.КодКарты Set start)

                // *** End programmer edit section *** (Карта.КодКарты Set start)
                this.fКодКарты = value;
                // *** Start programmer edit section *** (Карта.КодКарты Set end)

                // *** End programmer edit section *** (Карта.КодКарты Set end)
            }
        }
        
        /// <summary>
        /// ТипКарты.
        /// </summary>
        // *** Start programmer edit section *** (Карта.ТипКарты CustomAttributes)

        // *** End programmer edit section *** (Карта.ТипКарты CustomAttributes)
        public virtual IIS.Probasem.ВидКарты ТипКарты
        {
            get
            {
                // *** Start programmer edit section *** (Карта.ТипКарты Get start)

                // *** End programmer edit section *** (Карта.ТипКарты Get start)
                IIS.Probasem.ВидКарты result = this.fТипКарты;
                // *** Start programmer edit section *** (Карта.ТипКарты Get end)

                // *** End programmer edit section *** (Карта.ТипКарты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Карта.ТипКарты Set start)

                // *** End programmer edit section *** (Карта.ТипКарты Set start)
                this.fТипКарты = value;
                // *** Start programmer edit section *** (Карта.ТипКарты Set end)

                // *** End programmer edit section *** (Карта.ТипКарты Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КартаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КартаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КартаE", typeof(IIS.Probasem.Карта));
                }
            }
            
            /// <summary>
            /// "КартаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КартаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КартаL", typeof(IIS.Probasem.Карта));
                }
            }
        }
    }
}
