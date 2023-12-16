using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RaisingSystem.Migrations
{
    public partial class migr1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tickets_Masters_EmpId",
                table: "Tickets");

            migrationBuilder.DropIndex(
                name: "IX_Tickets_EmpId",
                table: "Tickets");

            migrationBuilder.AddColumn<int>(
                name: "MasterEmpId",
                table: "Tickets",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Tickets_MasterEmpId",
                table: "Tickets",
                column: "MasterEmpId");

            migrationBuilder.AddForeignKey(
                name: "FK_Tickets_Masters_MasterEmpId",
                table: "Tickets",
                column: "MasterEmpId",
                principalTable: "Masters",
                principalColumn: "EmpId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tickets_Masters_MasterEmpId",
                table: "Tickets");

            migrationBuilder.DropIndex(
                name: "IX_Tickets_MasterEmpId",
                table: "Tickets");

            migrationBuilder.DropColumn(
                name: "MasterEmpId",
                table: "Tickets");

            migrationBuilder.CreateIndex(
                name: "IX_Tickets_EmpId",
                table: "Tickets",
                column: "EmpId");

            migrationBuilder.AddForeignKey(
                name: "FK_Tickets_Masters_EmpId",
                table: "Tickets",
                column: "EmpId",
                principalTable: "Masters",
                principalColumn: "EmpId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
