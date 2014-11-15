namespace VolleyballPlayas.WebUI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RoleId : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AspNetUsers", "RoleId", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.AspNetUsers", "RoleId");
        }
    }
}
