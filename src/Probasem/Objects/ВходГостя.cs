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
    /// Вход гостя.
    /// </summary>
    // *** Start programmer edit section *** (ВходГостя CustomAttributes)

    // *** End programmer edit section *** (ВходГостя CustomAttributes)
    [AutoAltered()]
    [Caption("Вход гостя")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ВходГостяE", new string[] {
            "РегисКартГостей.Гость as \'ФИО\'",
            "РегисКартГостей.Карта.КодКарты"})]
    public class ВходГостя : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Probasem.РегисКартГостей fРегисКартГостей;
        
        private IIS.Probasem.РегистрацВход fРегистрацВход;
        
        // *** Start programmer edit section *** (ВходГостя CustomMembers)

        // *** End programmer edit section *** (ВходГостя CustomMembers)

        
        /// <summary>
        /// Вход гостя.
        /// </summary>
        // *** Start programmer edit section *** (ВходГостя.РегисКартГостей CustomAttributes)

        // *** End programmer edit section *** (ВходГостя.РегисКартГостей CustomAttributes)
        [PropertyStorage(new string[] {
                "РегисКартГостей"})]
        [NotNull()]
        public virtual IIS.Probasem.РегисКартГостей РегисКартГостей
        {
            get
            {
                // *** Start programmer edit section *** (ВходГостя.РегисКартГостей Get start)

                // *** End programmer edit section *** (ВходГостя.РегисКартГостей Get start)
                IIS.Probasem.РегисКартГостей result = this.fРегисКартГостей;
                // *** Start programmer edit section *** (ВходГостя.РегисКартГостей Get end)

                // *** End programmer edit section *** (ВходГостя.РегисКартГостей Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ВходГостя.РегисКартГостей Set start)

                // *** End programmer edit section *** (ВходГостя.РегисКартГостей Set start)
                this.fРегисКартГостей = value;
                // *** Start programmer edit section *** (ВходГостя.РегисКартГостей Set end)

                // *** End programmer edit section *** (ВходГостя.РегисКартГостей Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Probasem.РегистрацВход.
        /// </summary>
        // *** Start programmer edit section *** (ВходГостя.РегистрацВход CustomAttributes)

        // *** End programmer edit section *** (ВходГостя.РегистрацВход CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "РегистрацВход"})]
        public virtual IIS.Probasem.РегистрацВход РегистрацВход
        {
            get
            {
                // *** Start programmer edit section *** (ВходГостя.РегистрацВход Get start)

                // *** End programmer edit section *** (ВходГостя.РегистрацВход Get start)
                IIS.Probasem.РегистрацВход result = this.fРегистрацВход;
                // *** Start programmer edit section *** (ВходГостя.РегистрацВход Get end)

                // *** End programmer edit section *** (ВходГостя.РегистрацВход Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ВходГостя.РегистрацВход Set start)

                // *** End programmer edit section *** (ВходГостя.РегистрацВход Set start)
                this.fРегистрацВход = value;
                // *** Start programmer edit section *** (ВходГостя.РегистрацВход Set end)

                // *** End programmer edit section *** (ВходГостя.РегистрацВход Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ВходГостяE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ВходГостяE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ВходГостяE", typeof(IIS.Probasem.ВходГостя));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ВходГостя.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfВходГостя CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfВходГостя CustomAttributes)
    public class DetailArrayOfВходГостя : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Probasem.DetailArrayOfВходГостя members)

        // *** End programmer edit section *** (IIS.Probasem.DetailArrayOfВходГостя members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ВходГостя by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ВходГостя.
        /// </summary>
        public DetailArrayOfВходГостя(IIS.Probasem.РегистрацВход fРегистрацВход) : 
                base(typeof(ВходГостя), ((ICSSoft.STORMNET.DataObject)(fРегистрацВход)))
        {
        }
        
        public IIS.Probasem.ВходГостя this[int index]
        {
            get
            {
                return ((IIS.Probasem.ВходГостя)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Probasem.ВходГостя dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
