<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateAllProceduresAndFunctions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::unprepared('DROP PROCEDURE IF EXISTS getUsers;
                        CREATE PROCEDURE getUsers()
                        BEGIN
                            SELECT * FROM users;
                        END'
        );
        DB::unprepared('drop FUNCTION IF EXISTS notional_monthly_fees_chargeable_count;
                        CREATE FUNCTION notional_monthly_fees_chargeable_count (temp_scr_id bigint) RETURNS int
                        DETERMINISTIC
                        BEGIN
                          DECLARE month_count int;
                            select TIMESTAMPDIFF(MONTH, effective_date, CURDATE()) INTO month_count from transaction_masters
                          inner join student_course_registrations ON student_course_registrations.id = transaction_masters.student_course_registration_id
                          inner join transaction_details on transaction_masters.id=transaction_details.transaction_master_id
                          where transaction_masters.student_course_registration_id=temp_scr_id and transaction_details.ledger_id= 8;
                            RETURN month_count;
                        END'
        );

    }

    public function down()
    {
        Schema::dropIfExists('all_procedures_and_functions');
    }
}
