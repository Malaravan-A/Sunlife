public class sunlifeClass {
@AuraEnabled
    public static list<account> getAccounts(){
        list<account> accList = [select Id, Name, Owner.Name, Phone, Website, AnnualRevenue from Account where Industry='Financial Services'];
        return accList;
    }
}