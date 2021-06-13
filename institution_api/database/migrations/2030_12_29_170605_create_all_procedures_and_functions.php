<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

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
                          select TIMESTAMPDIFF(MONTH, effective_date, CURDATE())+1 INTO month_count from student_course_registrations where id=7 and is_completed=0 and is_started=1;
                            RETURN month_count;
                        END'
        );
        DB::unprepared('drop FUNCTION IF EXISTS get_fees_mode_by_scr_id ;
                        CREATE FUNCTION get_fees_mode_by_scr_id (temp_scr_id bigint) RETURNS int
                        DETERMINISTIC
                        BEGIN
                        DECLARE mode_id int;
                            select courses.fees_mode_type_id INTO mode_id from student_course_registrations inner join courses ON courses.id = student_course_registrations.course_id
                        inner join transaction_masters on student_course_registrations.id = transaction_masters.student_course_registration_id
                        where student_course_registrations.id=temp_scr_id ;
                            RETURN mode_id;
                        END'

        );


    }

    public function down()
    {
        Schema::dropIfExists('all_procedures_and_functions');
    }
}
