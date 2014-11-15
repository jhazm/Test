namespace VolleyballPlayas.WebUI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UserStatusId : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AspNetUsers", "UserStatusId", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.AspNetUsers", "UserStatusId");
        }
    }
}
