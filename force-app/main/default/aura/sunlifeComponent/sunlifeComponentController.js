({
	doInit : function(component, event, helper) {
        
		var action=component.get("c.getAccounts");
        action.setCallback(this,function(response){
            if(response.getState() === "SUCCESS"){
                var records = response.getReturnValue();
                records.forEach(function(record){
                    record.linkName = '/'+record.Id;
                });
                component.set('v.listAcc',records);
                component.set('v.listAccbackup',records);
                 component.set('v.contactColumns',[
                     {label:'Account Name', fieldName: 'linkName',sortable:true,type:'url',
            typeAttributes:{label:{fieldName: 'Name'},target:'_blank'}},
                     {label:'Account Owner',fieldName:'Name',sortable:true,type:'text'},   
            {label:'Phone',fieldName:'Phone',type:'text'}, 
            {label:'Website',fieldName:'Website',type:'text'}, 
             {label:'Annual Revenue',fieldName:'AnnualRevenue',type:'text'},
        ]);
            }
        });
        $A.enqueueAction(action);
	},
                     
updateSorting: function (cmp, event, helper) {
        var fieldName = event.getParam('fieldName');
        var sortDirection = event.getParam('sortDirection');
        cmp.set("v.sortedBy", fieldName);
        cmp.set("v.sortedDirection", sortDirection);
        helper.sortData(cmp, fieldName, sortDirection);
    },
searchAcc: function(component, event, helper){
          var filterText = component.get('v.searchString');
          var namelist = component.get('v.listAccbackup');
                     
                     var shortList = [ ];
                               if(filterText.length == 0){
                     
                     component.set('v.listAcc',namelist);
                 } else{ 
                     
           for( var j=0;j<namelist.length;j++){
               
                     if(filterText.toLowerCase()==namelist[j].Name.substring(0,filterText.length).toLowerCase()){
                         
                         shortList.push(namelist[j]);
                         
                     }
                     
                 }
                     component.set('v.listAcc',shortList);
                     } 
            }
        })