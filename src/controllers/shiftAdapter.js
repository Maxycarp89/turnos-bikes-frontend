export const shiftAdapter = (info) => {
    if (info !== null) {
      return {
        CreateDate: "",
        U_customer: info.CardCode ? info.CardCode : info.CustomerCode,
        U_custmrName: info.CardName ? info.CardName : info.CustomerName,
        U_Street: info.Address
          ? info.Address
          : info.BPBillToAddress
          ? info.BPBillToAddress
          : "",
        U_City: info.City ? info.City : "",
        U_Telephone: info.Cellular
          ? info.Cellular
          : info.Telephone
          ? info.Telephone
          : "",
        U_subject: "",
        U_status: -3,
        U_priority: null,
        U_callType: 1,
        U_origin: 1,
        U_descrption: "",
        U_BPType: "srvcSales",
        U_itemCode: info.ItemCode ? info.ItemCode : "",
        U_itemName: info.ItemName
          ? info.ItemName
          : info.ItemDescription
          ? info.ItemDescription
          : "",
        U_Chasis: info.U_Chasis ? info.U_Chasis : "",
        U_Motor: info.U_Motor ? info.U_Motor : "",
        U_internalSN: info.IntrSerial
          ? info.IntrSerial
          : info.InternalSerialNum
          ? info.InternalSerialNum
          : "",
        U_StartTime: "",
      };
    } else {
      return {
        CreateDate: "",
        U_customer: "",
        U_custmrName: "",
        U_Street: "",
        U_City: "",
        U_Telephone: "",
        U_subject: "",
        U_status: -3,
        U_priority: null,
        U_callType: 1,
        U_origin: 1,
        U_descrption: "",
        U_BPType: "srvcSales",
        U_itemCode: "",
        U_itemName: "",
        U_Chasis: "",
        U_Motor: "",
        U_internalSN: null,
        U_StartTime: "",
        
      };
    }
  };
  